require('dotenv').config();

const { Client, GatewayIntentBits, Partials, REST, Routes, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.commands = new Collection();
client.snipes = new Collection();

const token = process.env.DISCORD_TOKEN; // Asegúrate de tener tu token en una variable de entorno
const clientId = process.env.CLIENT_ID; // Tu Client ID de Discord

// Cargar comandos
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}

// Registrar comandos
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.once('clientReady', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const prefix = '!';
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/\s+/);
    const commandName = args.shift().toLowerCase();

    if (commandName === 'mod') {
        const command = client.commands.get('mod');
        if (!command) return;

        try {
            await command.execute({
                ...message,
                reply: (content) => message.channel.send(content),
                client,
            });
        } catch (error) {
            console.error(error);
            message.channel.send('Error al ejecutar !mod.');
        }
    }

    if (commandName === 'snipe') {
        const snipe = client.snipes.get(message.channel.id);
        if (!snipe) return message.channel.send('No hay mensajes eliminados recientes en este canal.');
        message.channel.send({ content: `**Snipe:** ${snipe.author} dijo: ${snipe.content} (eliminado ${snipe.deletedAt})` });
    }
});

client.on('messageDelete', async message => {
    if (message.partial) {
        try {
            message = await message.fetch();
        } catch (error) {
            console.error('No pude obtener el message delete parcial:', error);
            return;
        }
    }

    if (!message.content || message.author?.bot) return;

    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.tag,
        deletedAt: new Date().toLocaleString(),
        channel: message.channel.id,
    });
});

client.login(token);
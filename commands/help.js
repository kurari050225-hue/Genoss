const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Muestra la lista de comandos'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Comandos del Bot')
            .setDescription('Lista de comandos disponibles')
            .addFields(
                { name: 'Moderación', value: '/ban, /kick, /clear, /warn, /mute, /lock, /unlock', inline: true },
                { name: 'Seguridad', value: '/antilink, /antispam, /antiraid, /antibot, /antiflood', inline: true },
                { name: 'Utilidad', value: '/giveaway, /remind, /embed, /poll, /ticket, /snipe', inline: true },
                { name: 'Diversión', value: '/meme, /joke, /8ball, /coinflip, /roll', inline: true },
                { name: 'Info', value: '/ping, /stats, /botinfo, /serverstats, /avatar', inline: true },
            )
            .setColor(0x0099ff);

        await interaction.reply({ embeds: [embed] });
    },
};
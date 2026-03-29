const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botinfo')
        .setDescription('Información del bot'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Información del Bot')
            .addFields(
                { name: 'Nombre', value: interaction.client.user.username, inline: true },
                { name: 'ID', value: interaction.client.user.id, inline: true },
                { name: 'Servidores', value: interaction.client.guilds.cache.size.toString(), inline: true },
                { name: 'Usuarios', value: interaction.client.users.cache.size.toString(), inline: true },
            )
            .setColor(0x0099ff);

        await interaction.reply({ embeds: [embed] });
    },
};
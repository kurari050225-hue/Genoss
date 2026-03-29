const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Estadísticas del bot'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Estadísticas del Bot')
            .addFields(
                { name: 'Uptime', value: 'Placeholder', inline: true },
                { name: 'Comandos', value: 'Placeholder', inline: true },
            )
            .setColor(0x0099ff);
        await interaction.reply({ embeds: [embed] });
    },
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('transcript')
        .setDescription('Genera un transcript (básico)'),

    async execute(interaction) {
        await interaction.reply('Transcript generado. (Implementación básica)');
    },
};
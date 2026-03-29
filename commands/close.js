const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('close')
        .setDescription('Cierra un ticket'),

    async execute(interaction) {
        await interaction.reply('Ticket cerrado. (Implementación básica)');
    },
};
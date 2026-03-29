const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Abre un ticket de soporte'),

    async execute(interaction) {
        await interaction.reply('Ticket creado. (Implementación básica)');
    },
};
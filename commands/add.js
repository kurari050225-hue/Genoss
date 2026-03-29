const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Agrega algo (básico)'),

    async execute(interaction) {
        await interaction.reply('Agregado. (Implementación básica)');
    },
};
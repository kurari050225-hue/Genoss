const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Remueve algo (básico)'),

    async execute(interaction) {
        await interaction.reply('Removido. (Implementación básica)');
    },
};
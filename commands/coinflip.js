const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Lanza una moneda'),

    async execute(interaction) {
        const result = Math.random() < 0.5 ? 'Cara' : 'Cruz';
        await interaction.reply(`Resultado: ${result}`);
    },
};
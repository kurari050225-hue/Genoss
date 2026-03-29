const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remind')
        .setDescription('Establece un recordatorio')
        .addStringOption(option =>
            option.setName('mensaje')
                .setDescription('Mensaje del recordatorio')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('minutos')
                .setDescription('Minutos para recordar')
                .setRequired(true)),

    async execute(interaction) {
        const message = interaction.options.getString('mensaje');
        const minutes = interaction.options.getInteger('minutos');
        await interaction.reply(`Recordatorio establecido: "${message}" en ${minutes} minutos.`);
    },
};
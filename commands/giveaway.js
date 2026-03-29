const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('Inicia un sorteo')
        .addStringOption(option =>
            option.setName('premio')
                .setDescription('El premio')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('duracion')
                .setDescription('Duración en minutos')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction) {
        const prize = interaction.options.getString('premio');
        const duration = interaction.options.getInteger('duracion');

        await interaction.reply(`Sorteo iniciado: ${prize} por ${duration} minutos. (Implementación básica)`);
        // En un bot real, usa setTimeout y reacciona
    },
};
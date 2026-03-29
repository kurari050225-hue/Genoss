const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('antilink')
        .setDescription('Activa o desactiva el anti-enlaces')
        .addBooleanOption(option =>
            option.setName('activar')
                .setDescription('Activar o desactivar')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const activate = interaction.options.getBoolean('activar');

        // Lógica básica, en un bot real necesitarías manejar eventos de mensajes
        await interaction.reply(`Anti-enlaces ${activate ? 'activado' : 'desactivado'}.`);
    },
};
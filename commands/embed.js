const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Crea un embed')
        .addStringOption(option =>
            option.setName('titulo')
                .setDescription('Título del embed')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('descripcion')
                .setDescription('Descripción')
                .setRequired(true)),

    async execute(interaction) {
        const title = interaction.options.getString('titulo');
        const description = interaction.options.getString('descripcion');
        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setColor(0x0099ff);
        await interaction.reply({ embeds: [embed] });
    },
};
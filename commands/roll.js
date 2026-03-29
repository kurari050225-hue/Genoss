const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Lanza un dado')
        .addIntegerOption(option =>
            option.setName('caras')
                .setDescription('Número de caras del dado')
                .setRequired(false)
                .setMinValue(2)
                .setMaxValue(100)),

    async execute(interaction) {
        const sides = interaction.options.getInteger('caras') || 6;
        const result = Math.floor(Math.random() * sides) + 1;
        await interaction.reply(`Lanzaste un d${sides}: ${result}`);
    },
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Crea una encuesta')
        .addStringOption(option =>
            option.setName('pregunta')
                .setDescription('Pregunta de la encuesta')
                .setRequired(true)),

    async execute(interaction) {
        const question = interaction.options.getString('pregunta');
        const message = await interaction.reply(`${question}\n\n👍 Sí\n👎 No`);
        await message.react('👍');
        await message.react('👎');
    },
};
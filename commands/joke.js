const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Cuenta un chiste'),

    async execute(interaction) {
        const jokes = [
            '¿Por qué el libro de matemáticas está triste? Porque tiene muchos problemas.',
            'Chiste placeholder',
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        await interaction.reply(randomJoke);
    },
};
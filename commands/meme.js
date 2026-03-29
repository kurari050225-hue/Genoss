const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Envía un meme aleatorio'),

    async execute(interaction) {
        // En un bot real, usa una API como reddit
        const memes = [
            'https://i.imgur.com/abc123.jpg', // Placeholder
            'Meme placeholder',
        ];
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        await interaction.reply(randomMeme);
    },
};
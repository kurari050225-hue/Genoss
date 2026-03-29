const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('banner')
        .setDescription('Muestra el banner de un usuario o servidor')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario (opcional)')
                .setRequired(false)),

    async execute(interaction) {
        const user = interaction.options.getUser('usuario');
        if (user) {
            const userBanner = user.bannerURL({ dynamic: true, size: 512 });
            if (userBanner) {
                const embed = new EmbedBuilder()
                    .setTitle(`Banner de ${user.username}`)
                    .setImage(userBanner)
                    .setColor(0x0099ff);
                await interaction.reply({ embeds: [embed] });
            } else {
                await interaction.reply('Este usuario no tiene banner.');
            }
        } else {
            const guildBanner = interaction.guild.bannerURL({ size: 512 });
            if (guildBanner) {
                const embed = new EmbedBuilder()
                    .setTitle(`Banner de ${interaction.guild.name}`)
                    .setImage(guildBanner)
                    .setColor(0x0099ff);
                await interaction.reply({ embeds: [embed] });
            } else {
                await interaction.reply('Este servidor no tiene banner.');
            }
        }
    },
};
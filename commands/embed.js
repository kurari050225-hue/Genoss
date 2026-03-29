const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Crea un embed personalizado')
        .addStringOption(option =>
            option.setName('titulo')
                .setDescription('Título del embed')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('descripcion')
                .setDescription('Descripción del embed')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('color')
                .setDescription('Color del embed (hex, ej: #ff0000 o nombre como red)')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('imagen')
                .setDescription('URL de la imagen principal')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('thumbnail')
                .setDescription('URL del thumbnail')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('footer')
                .setDescription('Texto del footer')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('autor')
                .setDescription('Nombre del autor')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('autor_icono')
                .setDescription('URL del icono del autor')
                .setRequired(false)),

    async execute(interaction) {
        const title = interaction.options.getString('titulo');
        const description = interaction.options.getString('descripcion');
        const colorInput = interaction.options.getString('color');
        const image = interaction.options.getString('imagen');
        const thumbnail = interaction.options.getString('thumbnail');
        const footer = interaction.options.getString('footer');
        const author = interaction.options.getString('autor');
        const authorIcon = interaction.options.getString('autor_icono');

        let color = 0x0099ff; // Default
        if (colorInput) {
            if (colorInput.startsWith('#')) {
                color = parseInt(colorInput.slice(1), 16);
            } else {
                // Map common names
                const colors = {
                    red: 0xff0000,
                    blue: 0x0000ff,
                    green: 0x00ff00,
                    yellow: 0xffff00,
                    purple: 0x800080,
                    orange: 0xffa500,
                    pink: 0xffc0cb,
                    black: 0x000000,
                    white: 0xffffff,
                };
                color = colors[colorInput.toLowerCase()] || color;
            }
        }

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setColor(color);

        if (image) embed.setImage(image);
        if (thumbnail) embed.setThumbnail(thumbnail);
        if (footer) embed.setFooter({ text: footer });
        if (author) {
            if (authorIcon) {
                embed.setAuthor({ name: author, iconURL: authorIcon });
            } else {
                embed.setAuthor({ name: author });
            }
        }

        await interaction.reply({ embeds: [embed] });
    },
};
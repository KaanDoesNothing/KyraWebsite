export let handleGuildIcon = (guild) => {
    return guild.iconURL ? `${guild.iconURL}?size=4096` : "https://cdn.discordapp.com/embed/avatars/0.png";
}

export default async function getUserInfo() {
    const response = await fetch('https://ashy-plant-08f9bee03.1.azurestaticapps.net/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
}


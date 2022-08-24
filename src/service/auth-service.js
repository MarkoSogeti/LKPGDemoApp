export default async function getUserInfo() {
    const response = await fetch('https://green-island-03e405803.1.azurestaticapps.net/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
}


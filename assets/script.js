async function getLua() {
    const appId = document.getElementById('appId').value;
    const response = await fetch(`https://api.github.com/repos/SteamAutoCracks/ManifestHub/branches/${appId}`);
    if (response.status === 200) {
        console.log("check working")
        window.open(`https://codeload.github.com/SteamAutoCracks/ManifestHub/zip/refs/heads/${appId}`, '_blank');
    } else {
        console.log("Falied to download manifest: " + response)
    }
}
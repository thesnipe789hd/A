document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <h1>A</h1>
    <p>A custom Minecraft launcher</p>
    <button onclick="launchGame()">Launch Minecraft</button>
  `;
});

async function launchGame() {
  try {
    await window.electron.ipcRenderer.invoke('launch-minecraft', '1.20.4');
    console.log('Game launched successfully');
  } catch (err) {
    console.error('Failed to launch game:', err);
  }
}
export default class GameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    this.storage.setItem('gameState', JSON.stringify(state));
  }

  load() {
    const savedState = this.storage.getItem('gameState'); 
    if (!savedState) {
      throw new Error('No saved game state found'); 
    }
    try {
      return JSON.parse(savedState);
    } catch (e) {
      throw new Error('Invalid state');
    }
  }
}

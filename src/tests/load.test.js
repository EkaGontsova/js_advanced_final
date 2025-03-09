import GameState from '../js/GameState'
import GameStateService from '../js/GameStateService'
import GamePlay from '../js/GamePlay'

describe('GameStateService', () => {
    let storageMock;
    let gameStateService;
  
    beforeEach(() => {
      storageMock = {
        setItem: jest.fn(),
        getItem: jest.fn(),
      };
      gameStateService = new GameStateService(storageMock);
    });
  
    test('should save game state', () => {
      const state = new GameState(['player1'], ['enemy1'], 'forest', 1, true, null);
      gameStateService.save(state);
      expect(storageMock.setItem).toHaveBeenCalledWith('gameState', JSON.stringify(state)); // Ожидаем правильный ключ
  });
  
    test('should load game state successfully', () => {
      const state = new GameState(['player1'], ['enemy1'], 'forest', 1, true, null);
      storageMock.getItem.mockReturnValue(JSON.stringify(state));
  
      const loadedState = gameStateService.load();
      expect(loadedState).toEqual(state);
    });
  
    test('should throw error when loading game state fails', () => {
      storageMock.getItem.mockReturnValue(null); // Убедитесь, что возвращается null
      expect(() => gameStateService.load()).toThrow('No saved game state found');
  });  
})

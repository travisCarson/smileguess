import { GAME_MEMO, DEQUEUE_GAME_MEMO } from '../action_types/actionTypes.js';

export default function reducer(state = { scene: { notifications: [] } }, action = {}) {
  let newScene, newNotifications;

  switch (action.type) {
    case 'focus':
    const notifications = Array.prototype.slice.apply(state.scene.notifications);
    newScene = action.scene;
    newScene.notifications = notifications;
      return {
        ...state,
        scene: newScene,
      };
    case GAME_MEMO:
      newNotifications = state.scene.notifications.concat([action.payload]);
      newScene = Object.assign({}, state.scene, {
        notifications: newNotifications
      });
      return {
        ...state,
        scene: newScene,
      };
    case DEQUEUE_GAME_MEMO:
      newNotifications = state.scene.notifications.slice();
      newNotifications.pop();
      newScene = Object.assign({}, state.scene, {
        notifications: newNotifications
      });
      return {
        ...state,
        scene: newScene,
      };
    default:
      return state;
  }
}

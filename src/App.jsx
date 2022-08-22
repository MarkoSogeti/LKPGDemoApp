import styles from './App.module.scss';
import Login from './components/Login'
import getUserInfo from './service/auth-service'
import {createSignal, onMount} from "solid-js";

function App() {
  const [userInfo, setUserInfo] = createSignal("");
  onMount(async () => {
    await getUserInfo().then((res) => {setUserInfo(res)});
  });
  return (
      <div class={styles.App}>
        <Show when={userInfo() !== "" && userInfo()} fallback={<Login />}>
          <div >
              <p>Hello!</p>
          </div>
        </Show>
      </div>
  );
}

export default App;

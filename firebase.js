import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyApPG2bSacliIe8hNmE_lJGmbawbPXaWGo",
    authDomain: "finisia-93354.firebaseapp.com",
    projectId: "finisia-93354",
    storageBucket: "finisia-93354.appspot.com",
    messagingSenderId: "576433179313",
    appId: "1:576433179313:web:0744ca710fa7969488b090",
    measurementId: "G-X1RJPWESBT",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : undefined;

const analytics = () => {
    if (typeof window !== 'undefined') {
        return getAnalytics(app);
    } else {
        return null;
    }
};

export { analytics };

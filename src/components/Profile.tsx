import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/matheusem.png" alt="Matheus photo"/>
            <div>
                <strong>Matheus Eugenio Moreira</strong>
                <p>
                    <img src="icons/level.svg" alt="icon-level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}
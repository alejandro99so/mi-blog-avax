// CollaboratorCard.tsx
import Image from "next/image";
import styles from "./collaboratorCard.module.css";
import SocialNetworks from "../socialNetworks/SocialNetwork";
import { useLang } from "@/context/LangContext";

// Definir el tipo para las propiedades esperadas del colaborador
type Collaborator = {
    username: string;
    name: string;
    role: { [key: string]: string };
    summary: { [key: string]: string };
    socialNetworks: {
        instagram?: string;
        twitter?: string;
        github?: string;
    };
};

interface CollaboratorCardProps {
    collaborator: Collaborator;
}

const CollaboratorCard: React.FC<CollaboratorCardProps> = ({ collaborator }) => {
    const { lang } = useLang();

    return (
        <div className={styles.collaboratorCard}>
            <Image
                src={`/images/${collaborator.username}.png`}
                alt={collaborator.name}
                width={50}
                height={60}
                className={styles.image}
            />
            <b className={styles.name}>{collaborator.name}</b>
            <p className={styles.role}>{collaborator.role[lang]}</p>
            <SocialNetworks links={collaborator.socialNetworks} username={collaborator.username} />
        </div>
    );
};

export default CollaboratorCard;

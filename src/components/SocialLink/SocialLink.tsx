import Link from "next/link";
import styles from "./socialLink.module.css"
import Image from "next/image";

type SocialLinkProps = {
    networkName: string;
    profileUrl: string;
    iconName: string;
    username: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ networkName, profileUrl, iconName, username }) => {
    return (
        <Link
            rel="noopener noreferrer"
            target="_blank"
            href={profileUrl}
            className={styles.link}
        >
            <Image
                src={`/images/socialNetwork/${iconName}.png`}
                alt={networkName}
                loading="lazy"
                width={24}
                height={24}
                className={styles.image}
            />
            <span className={styles.tooltipText}>
                {username}
            </span>
        </Link>
    );
};

export default SocialLink;
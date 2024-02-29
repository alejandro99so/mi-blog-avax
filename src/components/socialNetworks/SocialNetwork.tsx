import styles from "./socialNetwork.module.css";
import SocialLink from "../SocialLink/SocialLink";

type SocialLinks = {
  instagram?: string;
  twitter?: string;
  github?: string;
}

type SocialNetworkKey = keyof SocialLinks;

interface SocialNetworksProps {
  links: SocialLinks;
  username: string;
}

const SocialNetworks: React.FC<SocialNetworksProps> = ({ links, username }) => {
  const activeSocialLinks = Object.keys(links).filter((key): key is SocialNetworkKey => key in links);

  return (
    <div className={styles.social}>
      {activeSocialLinks.map((network) => {
        const profileUrl = network === 'github'
          ? `https://github.com/${links[network]}`
          : network === 'twitter'
            ? `https://twitter.com/${links[network]}`
            : `https://www.instagram.com/${links[network]}`;

        return (
          <SocialLink
            key={network}
            networkName={network}
            profileUrl={profileUrl}
            iconName={network}
            username={`@${links[network]}`}
          />
        )
      })}
    </div>
  );
};

export default SocialNetworks;

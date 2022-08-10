import type { IconType } from 'react-icons';
import * as md from 'react-icons/md';

const useMdIcons = (icon: string) => {
  const Icon: IconType = md[icon as keyof typeof md];
  // refazer a logica -- exportar uma funcao que retorna um objeto com o icon e o nome do icon

  if (!Icon) {
    throw new Error(`Icon ${icon} not found`);
  }

  return { Icon, iconName: icon };
};

export default useMdIcons;

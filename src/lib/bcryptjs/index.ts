import bcryptjs from 'bcryptjs';

export const salt = bcryptjs.genSaltSync(10);
export const encrypt = (password: string) => bcryptjs.hashSync(password, salt);
export const decrypt = (password: string, hash: string) => bcryptjs.compareSync(password, hash);

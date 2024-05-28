import React, { FC } from 'react';
import initTranslations from '@/app/i18n';
import { cookies } from 'next/headers';
import Link from 'next/link';
import LogoutForm from '@/components/LogoutForm';
import { SESSION_COOKIE } from '@/contstants/constants';

interface IAuth {
  locale: string
}
const Auth: FC<IAuth> = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['auth']);
  const logoutBtnText = t('logout_btn');
  return cookies()
    .get(SESSION_COOKIE)?.value ? <LogoutForm text={logoutBtnText} /> : <Link href='/signin'>{t('login_btn')}</Link>;
};

export default Auth;

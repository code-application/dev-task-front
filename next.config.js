loadEnv(process.env.APP_ENV);

/**
 * 環境変数を読み込む
 *
 * @param {string} appEnv 環境名
 *
 */
function loadEnv(appEnv = "dev") {
  const env = {
    ...require(`./env/env.${appEnv}`),
    NEXT_PUBLIC_APP_ENV: appEnv,
  };

  for (const [key, value] of Object.entries(env)) {
    process.env[key] = value;
  }
}

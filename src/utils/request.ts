import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));

  const res = await fetch(uri).then((res) => res.json());

  return res;
}

export default req;

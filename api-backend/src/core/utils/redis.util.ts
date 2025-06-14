import redisService from "../services/redis.service.js";

export const upsertCachedData = async ({
  key,
  scope,
  data = {},
  ttlSeconds,
  keepTTL = false,
  overwriteScope = false,
}) => {
  const current = await redisService.getJSON(key || {});

  const updated = {
    ...current,
    [scope]: overwriteScope
      ? data
      : {
          ...(existing[scope] || {}),
          ...data,
        },
  };

  await redisService.setJSON({ key, value: updated, ttlSeconds, keepTTL });
};


export async function replayTryCatch(data: any) {
  try {
    return await data
  } catch (e) {
    throw e
  }
}
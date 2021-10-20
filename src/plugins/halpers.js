import dayjs from "dayjs";

export const getParsedDate = rawDate => dayjs(rawDate).format("DD.MM.YYYY");

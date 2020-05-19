import { takeLatest, put, call } from "redux-saga/effects";
import { db } from "../../config";
import * as actions from "./actions";
import * as types from "./types";

export function* getDbAsync() {
  try {
    const getData = async () => {
      let data = await db
        .collection("accounts")
        .get()
        .then((snapshots: any) => {
          const toBePass: any = [];
          snapshots.forEach((snap: any) => {
            toBePass.push(snap.data());
          });
          return toBePass;
        });
      return data;
    };
    const data = yield call(getData);
    yield put(actions.getDbSuccess(data));
  } catch (e) {
    yield put(actions.getDbFailure(e));
  }
}

export function* sagas() {
  yield takeLatest(types.GET_DB_REQUEST, getDbAsync);
}

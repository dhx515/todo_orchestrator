const initialDone = ['분기계획작성', '운영인수인계', '화상회의'];
let done = [...initialDone];


// 테스트용: 배열을 초기 상태로 리셋
export async function resetDoneMock() {
    done = [...initialDone];
}

export async function getDone(param) {
    return done;
}

export async function addDone(param) {
    done.push(param);
    return done;
}

export async function addDones(param) {
    param.forEach(item => {
        done.push(item);
    });
    return done;
}

export async function deleteDone(param) {
    const index = done.findIndex(item => item === param);
    if (index !== -1) {
        done.splice(index, 1);
    }
    return done;
}

export async function deleteDones(param) {
    param.forEach(target => {
        const index = done.findIndex(item => item === target);
        if (index !== -1) {
            done.splice(index, 1);
        }
    });
    return done;
}


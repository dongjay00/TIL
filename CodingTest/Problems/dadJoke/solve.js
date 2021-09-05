// 전역 변수 선언
let visited;
let res;

// 델타 탐색
const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

// dfs 함수 선언
function dfs(idx, word, r, c, puzzle) {
  // word의 모든 한글을 찾아냈다면 res에 true 할당
  if (idx === word.length - 1) {
    res = true;
    return;
  }

  // dfs 탐색
  let nr;
  let nc;
  for (let k = 0; k < 4; k++) {
    nr = r + dr[k];
    nc = c + dc[k];

    // 이동한 곳이 경계 바깥이라면 돌아간다.
    if (nr < 0 || nr >= puzzle.length || nc < 0 || nc >= puzzle[0].length)
      continue;

    // 이동한 곳의 한글이 word의 다음 한글과 같고, 방문한 적이 없다면
    // 방문체크를 하고 재귀함수를 돌게 한다.
    if (word[idx + 1] === puzzle[nr][nc] && visited[nr][nc] === 0) {
      visited[nr][nc] = 1;
      dfs(idx + 1, word, nr, nc, puzzle);
    }
  }
}

function solution(puzzle, word) {
  // 모든 곳이 0으로 채워진 4 x 4 배열을 visited에 할당
  visited = [];
  for (let i = 0; i < 4; i++) {
    visited.push(new Array(4).fill(0));
  }

  // res의 기본값을 false로 설정
  res = false;
  for (let r = 0; r < puzzle.length; r++) {
    for (let c = 0; c < puzzle[0].length; c++) {
      // 행렬을 탐색하다 word의 첫번째 글자를 발견하면, 방문 체크하고 dfs 시작
      if (puzzle[r][c] === word[0]) {
        visited[r][c] = 1;
        dfs(0, word, r, c, puzzle);
      }
    }
  }
  return res;
}

exports.solution = solution;

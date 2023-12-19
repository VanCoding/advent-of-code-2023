export const EXAMPLE_INPUT = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

export const EXAMPLE_TILTED = `OOOO.#.O..
OO..#....#
OO..O##..O
O..#.OO...
........#.
..#....#.#
..O..#.O.O
..O.......
#....###..
#....#....`;

export const EXAMPLE_SOLUTION = 136;

export const SOLUTION = 0;

export const INPUT = `.#..#..O..O.....#O..O#O.O#.#.##O........#O..O...O#.O.O....##..#O..#..O.O#.O..#.O#O.#.#...#...#....O.
#.O#.##..O.OO#..OO..O...O...#.O..#O...#..O...OO#....O...O#O...OO..##...O.O.O.....OO..#......O..##...
..........O..O.OO...O.O....O...O..O..#O#O.O.#........O..O.O.O..O##.#O...O#...O..O....#...OO.#O..#.#.
..O.O..O.O#....O...O#.....O.....##O..O#.O...O......#O#...OO...##O....O.O#OO#.....O##.....#O.OO....#O
OOO...O....##...#OO.O.O.#OO.O#O.O.O..O.OO.##.O...O.........O...#.#O.......O#...O###.#...#O.#.....#..
O..#..#......O...OO..#....#..O...O#.#...O#...#.##...#.#....O..O#.......O.......O..O.O......##..O....
.....###..O#........OOO.#...#O.O#O..OO...O#...O..................#....O..##.#.O.O.#.#O...#.##.O...##
OOOO......#O..O.#...O..O..O...#....#..O.#O..OOO.##....#.O......#.#.#O.O.O.#.O##.OOOO.O.#O.#O###..O.#
#.....O#..O...O..O.O..#...O..#..#..#.....#..O.#OO...#.O.....#..O.....O.O.#O#......#.O.O#...#.O..#...
O....O....O....OO.O...#......O.O.#O........O#.....#...........O.#.O.##.....O......#..#....O.....#...
.........O##.###....#......#....#O.O..#...O.O.....O..OO.O...O.OO..#.O.#OO..#.#...O.##.OO..#.OO.O....
......O###....O.#..O..OO#O.......#.......#O..#...O.O......O...O.....###.#O..#O.O...#O.#OO...##O..O.#
....#O#.....O...O........#.##O.O..O....#.....O.O#...#.##....##.....O.O.#.O..O#.O..O#...........O.OO.
#.O......#.##...OO...#.#.....#.###.OO..##O##.O.#.....O#..OOO...O.#O#..O...#..#....##......##.OO..O..
OOO.##OOOO#.........O.#OOOO...O....OO#O##.O......#.........#.O..#....O..#....#..#....#..#.O....#..OO
.#O......O#...........O.O....#.O....#...##..O......#.O..#..OOO.#....#...#O.....O....#OO..#.#O..O....
...#.....##..O..##...##...O#OO.O..O#..O##..O.....#O#..O...O#...O..##OO...OO#..O...#.O#...##....O.O#O
.......#.....O...#O..OO.O#O.....O.......O#.O...O.O#...O.#...O...O......O.O.##........#...#.##..O....
#O....O.O...#.OO....O#.O........O.....#....OO..#O#..O.O#.#.O.##OO...O.#..O......O#.#..O.###.....OO..
....O..OO.O..O..O#.........O..O...O.#..#....O.O.#.#O....O....O#.#......O..#.#..#.#..O.#.##.##O.O#.#O
O......O#.O.....O.#....O......OO....O.#O.O....#...O#.........O..O.O.O..........O....#.....O#...O.OO#
#OO...O...O...O.......##..O..##O..##......O...O...#O.O.OOO..O........#..##.OO.O.#.......O..#..O...OO
...#.#.O#OO.O.#...#.OO.....OO..#.O..#.OO......OO..........OO..O#...........O.#.#O.....#.O..O#..##...
..O..O..##.OO...O...O.#......O.#....#.O#..OOOO#.##.O......#.O...O.OO....OOOOO.........#.O.O....O..#.
.##.#...O#...OO.#.......#.##.O.......O.O.#.#O#..O#O#...O...#.O.............O......OO...O.......OO.##
...OO..#.O..O.#...O...........O##OOO...O.O##...O.#...O....#..O.O.OO....##O#.#O...#O.#...OO#.##.#.OO.
#...#......#.OO..#.#.O.O.....O..O..O#..#.....O.#..#.#.O.#O.#OO......OO.....O.##OO.#...OOOO#OO.....O.
.....###O##.##.......##O.##.O...#..OO....OO.O.........O#.....OOOO....#OO#...#O.OOO..O#....O.......#.
........#O.O..#O#O#O..OOO....O.....O.#..#.......O.....#....O.....#.O##..O#....OO.#..O#.O........#...
.#O...#..#.......#...O..O.O.#OO..#.O.#O#....O.#O..#....#..OO.#OOO.O#.O.#...O.O..O....#.#.O.......#..
O.......##.O#...OO.O#O.O.O....O#.....O...O..#.....#O..O..#.#O.##....O...#O...##..O....O...#OO.#.O...
.O.#..O.OO.O##..OO.##.#O#O..OO..O..........OO...O###..............O.....#.##...O.....#.OO.O#..O#O...
O.#....O.#.##..#...O....#...#.OO.#.##.#...#.#O.#.##O.....##O.O....O..O..O##.......O#...O##.......OO.
...#......#OO.........#..OO.O.O........#..O...O.O....O#O..OO#...#..#O..#.#OO....O.#..O.O.........O.O
...O...O..O#.#O#O#O#O.#..##..##.OO##........O.O......##.O.O.#..#.....O#O#..O.O.#....OO...#.O...O#O.O
##....#.....O.......#OOOOO..O....#...#........#....O.#....#.#..#.O##.##....O...#.#O...O...O..O......
..OO..O...O#.O#..#....##...#........###.O.OO...##.......#..#....O..O..O.#OOO..#..#O........O..OO...O
..#...#..........O..O.###..OO..O.O....#..#.OO#....#.#...O#..O..O..OO##....O.#...#.#...#..#.#......O.
..OO..#.O.........O#.O.OO.O..O.O#.OOO..O..#.#.O#....O#.OO..O#..##.#..#O#..#..O.#.O#...O...O..#O....O
..O#..O..O#O...#..#.OO.....#....OOOO.....O...O..OO.O.#.O...#OO.O##O..O#....##.OO#.......O.#....#.#..
......O.#......#....OO.#.O...#OO.#O..#....O#.O.OOOO..OO.O....##O.#....O#..OO#.OO#O##..O.#........O..
.O...........#O...O..O#..#..O.O..#O#.#..O..OO..O.O.#O...#..OOO.#...OO.....O........O...##..#...O...#
......#O...O...#O.O...O..#OO....O..O.#OO..O....O#..#OO...#.#.#.##OOO.O.#OO..OO#........#.##.O..#....
OOO.O..O.O....O.....O##.......#OO...#O.......O..#O....O....OO..O.#.........O.O.OO.....O#.........OO#
.#.OO......O...#.#..O....O...O...............O..O...O.OO....O.#O....#........#...#.#......O......O..
#.......#O.#...###....O.O....#.###.OO..#OO....#....O.....#O.OO##OO..O.O....#O..#......#..#O#...#.O..
OOOO..#...##O........#....OO.....O.O##..#O..OO..O#.##O..O#...#.OOOO##...........#.#O...#.O#.O....O.O
O#..O#..#.O..#.O.OO.O#O.O..#......O.#...O#O#..O..OO.#..O.OO#..OOO............O.....OOO#.O###.....##.
O....##.........O.O.O.O..OOO...O..O.O....O......#..........#...#.....#..#..#.....#.###..#...O#......
OOOO...#O##.O.O#...#.#..OO.O#...#O.O.....#....OOO....#..#O..##.....OO...O..OO#...O..OOO...#.O.O...OO
..#O#...O......O##..OO#..#O#..#O#.O...#.###.O.O....O.....#..OO.O...O.#.......#..#.#.#.....#O..O.O...
..#....O.O.......OO..O#..OOOO..#.........#OO......O..O...O..O.###.......#O#...#.O..OOO.......O#.#.#.
.O.O..#........OOO.O.##..#.O...O.O.OO..#..O#O.##.OOO#.OO...#....OO#O#.......O##.....O....#OOO.O...O.
#....O.......#..#OO.#.#.O....#..#.#...O..O.O..O....OOO....#.O.#OOOO.#.......#.#.OO...OOO....#..#....
.OO.O.O......O#.O....#......#O..##.....O.#..##..O...O.O...OO..OO..#..O..O....#......O.O.......#O.#.O
....O.#..O....O#.OOO.O..#....O..O...#.OO........O.#OO#O#.##..O..O##.O#...O......O....#O#..#...#O.#..
#.....#..O#..O..OOO..O.#....#.......OO.O##.#......OO.....OO....O.O...#.#.O#...OO.......OO....#.....#
....O.OO#....#O#..O..#O.....#..O...O...O.##...O....#.....#.O....O##O..O#O.....O..##...O....O.O#.....
..O.#.#..OO......#..#.#.#.#.....O..#O..O.........O#...O##.#.....#O.O..O....#.##O.#O..OO...##....#..O
O......#............#.....##O..O..OO.....##..O..O.......O.......#OO...#O.....O.O.O.......OOO.O.#OOO.
O..OO.#....#...O..O...##..OO...O........OO....O..........#OO.....#..#O...O#.#....#O..O#..#.O......O.
..O#.##O..O.#..#.......O...#...O..O.#O....#.#....#O#.O..#O...O..#OO.O#O.....O....#.....#..O.......#.
.O.O..OO.O...O.#O....OOO..O.O................O..##......OO.O.......OO.O................#.O....OOO#O.
......O.O.#O#...O#..#.........#O#.#O......O...#O....#.#O..O...O..#...O.O.#OO.O...#.........OO..OO...
.#.O..O...#O.##.O.......##....O...##.......OOO..O...#.O#.......#...OO#.#.#......#O..#OO..O...OO...O.
.O....O........#O.#..#.#...##.#..........O..O.#..#..#.##..#.#.#.#..#......O#........OO.....OO.#..#..
#O..O.#....O.#..OO#......#.#.O.O..O.##.#.....#O..OO..O......O#...O#..O..O.....OO.#........O......#..
O.#....O..#....O.O.OO#O..#...O##..OO#......O.#....O...#.O....##..O.O#OO..O......O.O.......#...O.O.#.
..O......O..OO.OOO.....#...O...#..#.#...OOO.O.#O...O.#O.....OO.O.....O.O#.O.O..##..............OO...
...OO#....O....#.......OOOO....#OO.O.O.O##.#.O..O.O......#.............#......O.O....#O##O.#.O.#O...
.#..O..#..#O...##O..O#O...#..O#...#.O.........O..O.O......O##O.#O.....O.O..##.#.........#.......O...
.O.OOOO.#...##.O#O#.#..#...#..OO..O##..##..OO.#...#...#....O..#O#.#...OO..O..O..#O..#.#OO.O#..O.O.##
..O...#....O#........O......OO.......O..##.O...O...#O..O.....#...O#...O.O#.#.O.#.#OO.##.....O..O..O.
.......#.O...O....O.O..#O.O..#O.#....##...................O#OO.....#....OO...O...##.#.O..#O#..#.O#..
.OO.#...##....#O#.........OOOO.OO.#.#.O.#....#......O.O.O#..###.O#..#..##....OO.#..#....#.#.....O#..
O.O...O..#....O.#......O##..#.O..#OO#O..........#O.OOO.......O......#OO#.....#..O#.#...##O..O.O.O...
.....O.....#O###..........O...O...#O.O.#.O.....O..O...O...#O...##...O#.#...OO.........O...#.##O....#
#OO.OO..##..O.O..OO.OO.O#.##.O.O..O##OO..#...#.O...OO.#.#...OO#.OO.....OO...##O..O...O....#.O...O##O
#.O...O.#O.##O..##.#.#O.#OO.O.O.O.#..............#...#.O...#.O..#O..O.O.O.#.O..OO#..O#..#..O..#.#...
.OO.#.O.O.O....O##O..O...O..O.##....#....#.......O...O.OO..#...#.O..#O....O......OO#O........##.O...
..#.......#.....##O.###..OO.#....O.O.#..#.O.#O#O##..##.....#.#.........#...O........#..#..#...#O..#.
..O#OO.#.OO#.OO...##..O..O.O.O......O.....#.....#O#.#.#O.#......#...O.....#O..O.#O...#.OOOO.OO......
....#...#......O#.......#......#O....O.O#O......O..O...O..##..OOO.O.#..#.O.OO..#.#..#...O.#......O..
O..O....O#....O...##O...#O##.#.....O..#.....#.#......#......O.....#.#.#..O.OO#..O...OO..OOOO.O......
.O....O..O...OO....O.....O#.......O........O....O....O.......O..O..#..OO..#O...#......##.#....O..OO#
.....#..OO.O.#.....O.O.O#O.#O#..O.O..O...#.#.O.O...#....O..#..#...##OO..#.#..#O.O...#.O#O......O.#..
O..##.#.O..#.O#.#O....#O.##..#O.#....O...OOO.O......O....#.O..##..#.O...#........#.#..O..OO.O..###..
....#O...O.O......#..O.O..........#.#OO.O#..#O..OO...#.O.O.#.#O...O..#...#..O#.O.OO..O........#OO...
..#...O......O.##...#O.#.O...O#O..O..O......O#.......#...#O...O#.#.#........#.....O##O.#..#O#..OO..#
#O#O#.O#..#.O...OO..........##.O#.....#.O...O.....O....O#OO..#O..O.....OO.#..#..O....#.O..O......O.#
OO#.#.#......#......###.#.........#..OO.O.O#.....O#O.#.O...O##.....#..##OO..OO#.###.O.O.......#.O.##
#.#O...#....#..#.......O......O..##....#..##..O...##O#..OO.....O..OOO.OO.O.#OO....O...#.......O..#..
.O.#O.....#.O......OO..O....###.#...O.O...#....#OO..........O#O....O.........O..##OO.O..#.#..O##.#..
.#..O..O.OOO.OOO.OO.O........##...OO#.O.O..O...O..O..#O.#.O.....OO...#....OO.#..O#.#.......#.O#....O
....O.O#.O#...OO...#..#.##.OOO.....O.O.O.....OO..OO..OOO.#.......O...O...#....#O...O#.O...O##.##.#..
##O#...O....O..OO.O..##OO.O#.O.....#.#.O.O.......O#...#..#.OO...#...#..OOO###.......#.O.....O.#O...O
#.O..#.O.....OO..OO.#....###.#.#O..OO..........#O...O.O....O..##O..#..O..O.#OO...#....#...##..#.....
#..O..###..#.O.........OO...#O........O..O..O...O......O....O...O...##.....O.......#.#...O#....O.O..
.#O...O#....#....#...O.#...#O..#...O#...O.OO......O..OOO..#..O.#.O..O..#O.......O####O#.OO#..O.O.O..
...#.#O#..#........O.#O....OO....O#..#.#.O..O....O....#.O#.#.#......O.#......O#..OO...##O.#O.....O#O`;

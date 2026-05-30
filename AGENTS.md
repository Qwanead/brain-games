# brain-games

Hexlet учебный проект — набор консольных математических игр на TypeScript.

## Команды

| Команда | Что делает |
|---------|-----------|
| `make install` | `npm ci && tsc` — установка + компиляция `.ts` → `dist/` |
| `make lint` | `npx eslint .` — airbnb-typescript/base |
| `make publish` | `npm publish --dry-run` |
| `npm run tsc:w` | TypeScript watch mode |

Никаких тестов нет (`test` — заглушка). CI запускает только `make install && make lint`.

## Архитектура

- **Точки входа** — `bin/*.ts` (6 штук: `brain-games`, `brain-even`, `brain-calc`, `brain-gcd`, `brain-prime`, `brain-progression`). Каждая — `#!/usr/bin/env node`, импортирует `startGame` из `src/index.ts` и готовый экземпляр игры.
- **Движок** — `src/index.ts`: цикл из 3 попыток, приветствие, поздравление. Универсален через generic `Game<T>`.
- **Игры** — `src/games/*.ts`. Каждая экспортирует **один экземпляр** `BrainGame` (синглтон), а не класс. Реализуют интерфейс `Game<T>`:
  ```
  rule: string
  getInput(): T
  getQuestion(T): string
  getCorrectAnswer(T): number | 'yes' | 'no'
  ```
- **`T` зависит от игры**: `[number]` (even, prime), `[number, Operator, number]` (calc), `[number, number]` (gcd), `Progression` (progression).
- **`BrainGame<T>`** — простая обёртка, делегирует все методы конструктору. Никакой логики.

## Важные детали

- **Импорты с `.js`** — хотя файлы `.ts`, все импорты пишутся с расширением `.js` (требование ESM + TypeScript при `type: "module"`).
- **progression.ts: ответ — первый элемент** — `getInput()` сохраняет пропущенное число первым элементом кортежа. `getCorrectAnswer` читает `sequence[0]`. Вопрос формируется `slice(1)`.
- **Rule.ts** — строки правил живут в отдельном файле, а не в каждой игре.
- **settings.ts** — `MIN_NUM=1`, `MAX_NUM=100`, `SEQUENCE_LENGTH=10`, `NUM_OF_ATTEMPTS=3`, `OPERATORS = ['+', '-', '*']`.

## Визуальный осмотр

- `dist/` и `node_modules/` в `.gitignore`.
- `hexlet-check.yml` в `.github/workflows/` — автосгенерирован, **не удалять и не редактировать**.
- Node.js CI: `make install → make lint` на node 12/14/16.

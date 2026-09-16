You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection


## Contesto del progetto

POC di riferimento: servizio digitale per la Pubblica Amministrazione italiana,
Angular 20 + Design System .italia (`design-angular-kit`, Bootstrap Italia 2).

### Vincoli non negoziabili

- Usa sempre componenti `design-angular-kit` (`it-*`), mai HTML custom dove il kit
  ha un equivalente. Ogni componente va importato nell'array `imports` del
  componente che lo usa: `provideDesignAngularKit()` registra solo la configurazione.
- Nessun colore, spaziatura o font hardcoded: solo variabili e utility di
  Bootstrap Italia. Le personalizzazioni SCSS vanno dichiarate PRIMA dell'import
  di `bootstrap-italia.scss`, altrimenti sono ignorate.
- Accessibilità WCAG 2.1 AA: ogni elemento interattivo raggiungibile e azionabile
  da tastiera, errori di form annunciati via `aria-describedby` / `aria-invalid`,
  focus gestito e ripristinato all'apertura e chiusura di overlay e modali.
- Nessun dato personale reale, nemmeno come esempio. Codici fiscali, nomi,
  indirizzi e IBAN sono sempre di fantasia.
- Il repo è pubblico: nessun riferimento a clienti, enti o fornitori.

### Modalità di lavoro

Sono io a scrivere il codice. Il tuo ruolo è revisione, debugging e spiegazione:
non implementare al posto mio se non te lo chiedo esplicitamente. Quando trovi
un errore, indicami la causa e la riga, non la soluzione già scritta.
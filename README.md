# pa-service-reference

Implementazione di riferimento di un servizio digitale per la Pubblica Amministrazione italiana, realizzata con Angular 20 e il Design System .italia.

> **Stato:** progetto in sviluppo, non pronto per l'uso in produzione.

## Perché

Chi sviluppa un servizio digitale per la PA deve tenere insieme tre requisiti: la conformità alle Linee guida di design AgID, un'accessibilità WCAG 2.1 AA verificabile e un'architettura frontend moderna e manutenibile. Manca un esempio end-to-end che li mostri integrati nella stessa applicazione.

La documentazione di [design-angular-kit](https://github.com/italia/design-angular-kit) descrive i singoli componenti, ma non come comporli in un servizio completo. Questo progetto colma quel vuoto con un'applicazione Angular basata su componenti standalone e signals.

## Cosa contiene

Oggi il repository contiene la configurazione di base: Angular 20 con design-angular-kit e Bootstrap Italia integrati.

Lo sviluppo procede per aree:

- **Layout conforme alle Linee guida AgID**: header, footer, breadcrumb e struttura di pagina con i componenti del kit, landmark ARIA e skip link.
- **Autenticazione SPID simulata**: flusso di accesso con pulsante "Entra con SPID", identity provider e identità di fantasia, route guard per le aree riservate. Nessuna integrazione con servizi SPID reali.
- **Form multi-step accessibile**: procedura guidata con Reactive Forms, validazione per passo, errori annunciati alle tecnologie assistive e gestione del focus.
- **Audit di accessibilità**: verifica automatica e manuale dell'applicazione rispetto ai criteri WCAG 2.1 AA.

## Stack

- [Angular](https://angular.dev) 20.3
- [design-angular-kit](https://github.com/italia/design-angular-kit) 20.3
- [Bootstrap Italia](https://italia.github.io/bootstrap-italia/) 2
- [TypeScript](https://www.typescriptlang.org) 5.9 in modalità strict

## Come avviarlo

Prerequisito: [Node.js](https://nodejs.org) 22 (22.12 o successiva).

```bash
npm ci
npm start        # server di sviluppo su http://localhost:4200
npm test         # test unitari
npm run build    # build di produzione in dist/
```

## Accessibilità

L'obiettivo è la conformità WCAG 2.1 AA, da verificare con test automatici basati su axe-core e con prove manuali da tastiera e con screen reader.

## Licenza

© 2026 i contributori del progetto. Distribuito con licenza [EUPL-1.2](LICENSE) (European Union Public Licence v. 1.2).

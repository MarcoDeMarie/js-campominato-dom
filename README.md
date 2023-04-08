**Consegna**
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
## Svolgimento
- ho creato un bottone che quando lo schiaccio fa comparire la griglia e ess oscompare
- ho creato un array che conterrà tutti gli id delle bombe
- con la condizione if sono andato a controllare che gli id delle bombe non si ripetano
- con un ciclo for vado a creare la mia griglia cella per cella
- alla creazione della cella si aggiunge un addeventlistener che permette la gestione del click
- al click se l'id della cella è nell'array è una bomba, quindi il gioco finirà facendo scomparire la griglia e mostrandomi il punteggio fatto
- se al click non prendo nessuna bomba mi farà continuare a cliccare e al raggiungimento di 84 punti scomparirà la griglia e ti mostrerà il punteggio fatto
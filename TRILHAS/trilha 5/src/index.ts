// ex 1

console.log(
  "EX 1 --------------------------------------------------------------------------------------------"
);

abstract class TaskManager {
  protected tasks: Set<string> = new Set();

  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

class Project extends TaskManager {
  addTask(task: string): void {
    if (this.tasks.has(task)) {
      console.log(`A tarefa "${task}" já existe no projeto.`);
    } else {
      this.tasks.add(task);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

class DailyTasks extends TaskManager {
  addTask(task: string): void {
    if (this.tasks.has(task)) {
      console.log(`A tarefa "${task}" já foi adicionada para hoje.`);
    } else {
      this.tasks.add(task);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

const project = new Project();
project.addTask("PLANO INFALIVEL 1");
project.addTask("PLANO INFALIVEL 2");
project.addTask("PLANO INFALIVEL 3");
console.log("Tarefas do Projeto:", project.listTasks());

const daily = new DailyTasks();
daily.addTask("PLANO MALEFICO 1");
daily.addTask("PLANO MALEFICO 2");
daily.addTask("PLANO MALEFICO 3");
console.log("Tarefas Diárias:", daily.listTasks());

//ex3

console.log(
  "EX 2 --------------------------------------------------------------------------------------------"
);

abstract class Inventory {
  protected items: Record<string, number> = {};

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    this.items[item] = (this.items[item] || 0) + quantity;
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
    }
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

class StoreInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    const current = this.items[item] || 0;
    this.items[item] = Math.min(current + quantity, 10);
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
    }
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("NOTEBOOKS", 2);
warehouse.addItem("MOUSE", 10);
console.log("Inventário do Armazém:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("LAPIS", 5);
store.addItem(" CANETA", 10);
store.removeItem(" CANETA");
console.log("Inventário da Loja:", store.getInventory());

//ex 3

console.log(
  "EX 3 --------------------------------------------------------------------------------------------"
);

abstract class FavoriteManager {
  protected favorites: Set<string> = new Set();

  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    this.favorites.add(item);
  }

  getFavorites(): string[] {
    return Array.from(this.favorites).sort();
  }
}

class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (!this.favorites.has(item)) {
      this.favorites = new Set([item, ...this.favorites]);
    }
  }

  getFavorites(): string[] {
    return Array.from(this.favorites);
  }
}

const movies = new MoviesFavoriteManager();
movies.addFavorite("HOMEM ARANHA 1");
movies.addFavorite("HOMEM ARANHA 2");
movies.addFavorite("HOMEM ARANHA 2");
console.log("Filmes Favoritos:", movies.getFavorites());

const books = new BooksFavoriteManager();
books.addFavorite("Harry Potter 1");
books.addFavorite("Harry Potter 2");
books.addFavorite("Harry Potter 2");
console.log("Livros Favoritos:", books.getFavorites());

//ex 4

console.log(
  "EX 4 --------------------------------------------------------------------------------------------"
);

abstract class VoteSystem {
  protected votes: Map<string, number> = new Map();

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  voteFor(candidate: string): void {
    const currentVotes = this.votes.get(candidate) || 0;
    this.votes.set(candidate, currentVotes + 1);
  }

  getResults(): object {
    const results: Record<string, number> = {};
    this.votes.forEach((votes, candidate) => {
      results[candidate] = votes;
    });
    return results;
  }
}

class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    const currentVotes = this.votes.get(candidate) || 0;
    this.votes.set(candidate, currentVotes + 1);
  }

  getResults(): object {
    return Array.from(this.votes.entries())
      .sort((a, b) => b[1] - a[1]) // Ordena por número de votos (descendente)
      .map(([candidate, votes]) => ({ candidate, votes }));
  }
}

// Exemplos de uso
const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log("Resultados da Eleição:", election.getResults());

const poll = new Poll();
poll.voteFor("Pizza");
poll.voteFor("Sushi");
poll.voteFor("Pizza");
poll.voteFor("Hambúrguer");
console.log("Resultados da Enquete:", poll.getResults());

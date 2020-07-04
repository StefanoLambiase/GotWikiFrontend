import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {CharacterMainInfo} from '../../models/characterMainInfo/character-main-info';
import {CharactersService} from '../../services/characters.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css']
})
export class CharactersTableComponent implements OnInit {

  characterMainInfos: CharacterMainInfo[];
  dataSource; // Dati della tabella.
  // Colonne della tabella da mostrare.
  columnsToDisplay = ['name', 'house', 'nickname', 'isRoyal', 'isAlive', 'sceneCount', 'killCount', 'actor'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;  // Variabile usata per ordinare la tabella per colonna.
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Output() selectedCharacterEvent = new EventEmitter<CharacterMainInfo>();

  /* Methods */

  constructor(
    private charactersService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.charactersService.findAllCharacterMainInfo().subscribe(data => {
      this.characterMainInfos = data;
      this.dataSource = new MatTableDataSource(this.characterMainInfos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  /***
   * Metodo usato per fare la ricerca nella tabella.
   * @param event evento lanciato al momento in cui si scrive nel campo del filtro.
   */
  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  selectCharacter(characterMainInfo: CharacterMainInfo){
    this.selectedCharacterEvent.emit(characterMainInfo);
  }
}

import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { ConsultaEntity } from './../consulta/consulta.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tramites'})

export class TramitesEntity{


    @PrimaryGeneratedColumn()
    idSolicitud: number;
    @Column({type: 'varchar',nullable: false})
    cc: number;
    @Column({type: 'varchar', length: 10, nullable: false})
    nombre: string;
    @Column({type: 'varchar',nullable: false})
    jornada: string;
    @Column({type: 'varchar',nullable: false})
    numerosd: string;
    @Column({type: 'varchar',nullable: false})  
    carrera: string;
    @Column({type: 'varchar', nullable: true})
    asignatura: string;
    @Column({ type: 'varchar', nullable: true })
    motivo: string;
    @Column({ type: 'varchar', nullable: true })
    semestre: string;
    @Column({ type: 'varchar', nullable: true })
    hora: string;

    @Column({
        type: 'enum',
        enum: ["Cancelacion Asignatura", "Adicionar Asignatura", "Cita con el director", "Otro"],
        default: "Cita con el director"
      })
    tiposol: string;
    
    @Column({type: 'date',nullable: false})
    fecha: Date;

    @ManyToOne(() => UsuarioEntity, UsuarioEntity => UsuarioEntity.tramites)
    usuario: UsuarioEntity;

    @OneToMany(() => ConsultaEntity, (consultaEntity)=> consultaEntity.tramitesEntity)
    consultaEntity:ConsultaEntity[];


}


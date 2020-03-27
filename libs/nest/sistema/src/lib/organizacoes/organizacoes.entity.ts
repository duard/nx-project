import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('organizacao')
export class Organizacao {

  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ type: 'varchar', nullable: false }) title: string;
  @Column({ type: 'date', nullable: true }) watchedOn: Date;
  @Column({ type: 'varchar', nullable: true }) genre: string;
  @Column({ type: 'integer', nullable: true }) rating: number;
}
/*
CREATE TABLE `organizacoes` (
  `id` int(11) NOT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `api_url_prod` varchar(255) DEFAULT NULL,
  `api_url_dev` varchar(255) DEFAULT NULL,
  `api_port` int(11) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `site` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `imgBackground` varchar(255) DEFAULT NULL,
  `imgLogo` varchar(255) DEFAULT NULL,
  `colorBackground` varchar(255) DEFAULT NULL,
  `dt_created` datetime DEFAULT NULL,
  `dt_updated` datetime DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
*/

using Microsoft.EntityFrameworkCore;
using RegistroEstudiantes.Datos.modelos;


namespace RegistroEstudiantes.Datos
{
    public class RegistroContext : DbContext
    {
        public RegistroContext(DbContextOptions options) : base(options)
        {
        }
        // creacion de las tablas en la base de datos 
        public DbSet<Estudiante> Estudiantes { get; set; }
        public DbSet<Materia> Materias { get; set; }
        public DbSet<Profesor> Profesores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //relación muchos a muchos entre Estudiante y Materia, definicion de llave primaria compuesta
            modelBuilder.Entity<EstudianteMateria>()
                .HasKey(em => new { em.EstudianteId, em.MateriaId });

            //estudiante materia tiene un estudiante , un estudiante tiene muchos EstudiantesMaterias
            // la llave foranea es EstudianteId
            modelBuilder.Entity<EstudianteMateria>()
                .HasOne(em => em.Estudiante)
                .WithMany(e => e.EstudiantesMaterias)
                .HasForeignKey(em => em.EstudianteId);

            // estudiante materia tiene una materia ,una materia tiene muchos EstudianteMateria
            // la llavve foranea es MeteriaId
            modelBuilder.Entity<EstudianteMateria>()
                .HasOne(em => em.Materia)
                .WithMany(m => m.EstudiantesMaterias)
                .HasForeignKey(em => em.MateriaId);
        }

    }
}
